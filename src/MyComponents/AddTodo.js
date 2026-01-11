import react from 'react';

export const AddTodo = () => {
    return (
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby=""/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit Todo</button>
            </form>
        </div>
    )
}
