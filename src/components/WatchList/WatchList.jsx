import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useNavigate } from "react-router";
import { watchContext } from "../../contexts/WatchContext";
import WatchCard from "../WatchCard/WatchCard";
import "./WatchList.css";

const WatchList = () => {
    const { getWatches, watchesData, paginationPages } =
        useContext(watchContext);

    const navigate = useNavigate();
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(window.location.search);
        return search.get("_page");
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(window.location.search);
        search.set("_page", page);
        navigate(`${window.location.pathname}?${search.toString()}`);
        setPage(page);
        getWatches(navigate);
    };

    useEffect(() => {
        getWatches(navigate);
        setPage(getPage(navigate));
    }, []);

    return (
        <>
            <div className="title_list">
                <h2 className="title">Finest Men’s Quality Swiss Watches</h2>
            </div>
            <div className="list">
                {watchesData.map((item) => (
                    <WatchCard key={item.id} item={item} />
                ))}
            </div>
            <Grid container spacing={3}>
                <Pagination
                    page={+page}
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                />
            </Grid>
        </>
    );
};

export default WatchList;
