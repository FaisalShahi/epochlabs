// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from 'src/routes/components';
// assets
import { MaintenanceIllustration } from 'src/assets/illustrations';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="h3" sx={{ mb: 2, mt: 5 }}>
        Page is currently under maintenance
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

      {!mdUp && <Button component={RouterLink} href="/" size="large" variant="contained">
        Go to Home
      </Button>}


    </Stack>
  );
}
