const API = 'http://192.168.100.221:3000/tasks'
const API2 = 'http://192.168.100.221:3000/task'

export const getTasks = async () => {
    const res = await fetch(API);
        return await res.json();
}

export const getTask = async (taskId) => {
    const res = await fetch(`${API2}/${taskId}`)
    return await res.json();
};
export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });
    return await res.json();
};
export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
        });
};
export const updateTask = async (id, newTask) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });
    return res;
}