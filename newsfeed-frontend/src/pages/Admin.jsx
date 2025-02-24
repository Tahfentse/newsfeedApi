import { useState } from "react";
import NewsList from "../components/NewsList";
import AddNews from "../components/AddNews";

const Admin = () => {
    const [refresh, setRefresh] = useState(false);

    const refreshNews = () => setRefresh(!refresh);

    return (
        <div>
            <h1 className="text-center mt-3">Admin Panel</h1>
            <AddNews refreshNews={refreshNews} />
            <NewsList key={refresh} />
        </div>
    );
};

export default Admin;
