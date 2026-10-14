function Cookie() {

    const createCookie = () => {
        document.cookie = "username=bhargava";
        document.cookie = "password=12345"
    }
    const getCookie = () => {
        alert(document.cookie)
    }
    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    const deleteAllCookies = () => {
        deleteCookie("username");
        deleteCookie("password");
    };

    return (
        <>
            <h1>Cookie</h1>
            <button onClick={createCookie}> Create Cookie</button>
            <button onClick={getCookie}> Get Cookie</button>
            <button onClick={deleteAllCookies}> Delete Cookie</button>
        </>)
}

export default Cookie;