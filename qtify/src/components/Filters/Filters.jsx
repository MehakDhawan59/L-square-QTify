import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Filters({ data, filterIndex, setFilterIndex }) {

    const handleChange = (event, newValue) => {
        setFilterIndex(newValue);
    };


    return (
        <Box sx={{ width: '100%', marginBottom: "20px" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={filterIndex} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                    style: {
                        backgroundColor: "var(--color-primary)"
                    }
                }}>
                    {data.map((filter, idx) => (
                        <Tab label={filter.label} {...a11yProps(idx)} className={styles.filterHeading} style={{ color: "white" }} />
                    ))}

                </Tabs>
            </Box>
        </Box>
    );
}

export default Filters;