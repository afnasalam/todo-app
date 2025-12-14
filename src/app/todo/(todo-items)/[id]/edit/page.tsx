export default async function TodoEditPage({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;
    if (!id) {
        return <div>No id provided</div>;
    }
    if (id === "1") {
        return <div>Todo 1</div>;
    }
    if (id === "2") {
        return <div>Todo 2</div>;
    }
    return (<div>Hello todo edit!!</div>);
}
  