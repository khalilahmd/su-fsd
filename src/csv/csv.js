import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

function Csv({ initialData }) {
    const [sortingValue, setSortingValue] = useState('select');
    const [data, setData] = useState(initialData);

    const handleSortingChange = (event) => {
        let sortedData = [...data];

        const type = event.target.value;
        if (type === 'created-at') {
            sortedData.sort((a, b) => new Date(Object.keys(b)[0]) - new Date(Object.keys(a)[0]));
        } else if (type === 'a-z') {
            sortedData.sort((a, b) => {
                const nameA = parseInt(a[Object.keys(a)[0]].replace(/[^0-9]/g, ''), 10);
                const nameB = parseInt(b[Object.keys(b)[0]].replace(/[^0-9]/g, ''), 10);

                if (nameA === nameB) {
                    return a[Object.keys(a)[0]].localeCompare(b[Object.keys(b)[0]], undefined, { sensitivity: 'base' });
                }

                return nameA - nameB;
            });
        } else if (type === 'z-a') {
            sortedData.sort((a, b) => {
                const nameA = parseInt(a[Object.keys(a)[0]].replace(/[^0-9]/g, ''), 10);
                const nameB = parseInt(b[Object.keys(b)[0]].replace(/[^0-9]/g, ''), 10);

                if (nameA === nameB) {
                    return b[Object.keys(b)[0]].localeCompare(a[Object.keys(a)[0]], undefined, { sensitivity: 'base' });
                }

                return nameB - nameA;
            });
        } else {
            sortedData = initialData;
        }

        setData(sortedData);
        setSortingValue(type);
    };


    return (
        <div>
            <Grid container direction="column" alignItems="center">
                <FormControl style={{ marginBottom: '20px', marginTop: '30px' }}>
                    <InputLabel>Sort Data</InputLabel>
                    <Select value={sortingValue} onChange={handleSortingChange}>
                        <MenuItem disabled value="select">Please Select</MenuItem>
                        <MenuItem value="a-z">A - Z</MenuItem>
                        <MenuItem value="z-a">Z - A</MenuItem>
                        <MenuItem value="created-at">Recent</MenuItem>
                        <MenuItem value="other">Old</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={2} justifyContent="center">
                    {data.map((item, index) => (
                        <Grid item key={index}>
                            <Card style={{ width: '300px' }}>
                                <CardContent>
                                    <p>Date/Time: {Object.keys(item)[0]}</p>
                                    <p>File Name: {item[Object.keys(item)[0]].replace(/\d+/g, '').split('.')[0]}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

export default Csv;