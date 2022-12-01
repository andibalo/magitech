
interface CourseInfo {
    title: string
    totalHours: string
    totalSessions: string
    price: number
    description: string
    modules: CourseModule[]
}

interface CourseModule {
    title: string
    description: string
}