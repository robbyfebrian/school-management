export type Teacher = {
    id: string,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string,
}