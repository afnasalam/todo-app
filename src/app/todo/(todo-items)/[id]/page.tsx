export default async function TodoItemPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    return <div>TodoItemPage {id}</div>;
}