export interface Repository<E> {
    findOne(id: string): Promise<E | undefined>
    findAll(): Promise<E[] | undefined>
    create(dado: E): Promise<void>
    update(id: string, dado: E): Promise<void>
    delete(id: string): Promise<void>
}
