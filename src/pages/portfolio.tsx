import { ProjectGrid } from "@/components/projectGrid/projectGrid";
import { Box, Divider, Typography } from "@mui/material";

export default function Portfolio() {
    return (
        <Box ml={'5%'} mr={'5%'} mt={'10%'}>
            <Typography variant="h3" style={{ color: 'black', textAlign: 'center', fontFamily: 'Courier New' }}>CSS Art & Projects</Typography>
            <Divider style={{ margin: '50px' }} />
            <ProjectGrid />
        </Box >
    )
}