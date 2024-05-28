// src/components/ExampleComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Actions/SampleActions';

const ExampleComponent = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.sample);


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(data, loading, error)
    return (
        <div>
            <h1>Data:</h1>
            <ul>
                {data.map((item) => (
                    <li  key={item.id}>{item.movie}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleComponent;
