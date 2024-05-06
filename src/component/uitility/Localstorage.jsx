const getStoredListApplication = () =>{
    const storedListApplication = localStorage.getItem('list-application');
    if(storedListApplication){
        return JSON.parse(storedListApplication);
    }
    return[];
}

const saveListApplication = id =>{
    const storedListApplication =getStoredListApplication();
    const exists = storedListApplication.find(bookId => bookId === id);
    if(!exists){
        storedListApplication.push(id);
        localStorage.setItem('list-application', JSON.stringify(storedListApplication))
    }
}



export { getStoredListApplication, saveListApplication}