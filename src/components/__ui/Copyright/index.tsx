import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {}

export default function index(props: any): JSX.Element {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}
