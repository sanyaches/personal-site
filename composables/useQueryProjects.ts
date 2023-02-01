export type Project = {
  _path: string,
  title: string,
  description: string,
  companySize: number,
  authorName: string,
  authorDepartment: string,
  authorImageUrl: string,
  authorQuote: string,
  useCases: string,
  thumbnailUrl?: string,
  logoUrl?: string,
}

export default function useQueryProjects() {
  const getProjects = async () => {
    return await queryContent<Project>('projects')
      .sort({ companySize: -1 })
      .find()
  }

  const getSurroundProjects = async (story: Project) => {
    if (!story || !story._path) {
      return []
    }

    const surroundProjects = await queryContent<Project>('projects')
      .sort({ companySize: -1 })
      .findSurround(story._path, {before: 2, after: 2})

    return surroundProjects.filter(Boolean).slice(0, 2)
  }

  return {
    getProjects,
    getSurroundProjects,
  }
}
