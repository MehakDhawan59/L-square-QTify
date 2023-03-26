import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ControlledAccordions({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ marginTop: "20px", padding: "0px 50px" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ borderColor: "var(--color-white)", border: "1px solid white", }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)", }}
                >
                    <Typography sx={{ flexShrink: 0 }}>
                        {data.summary}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {data.detail}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default ControlledAccordions;