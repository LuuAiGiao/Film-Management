import * as React from 'react';

export default function Footer() {
  return ( // Thêm dòng này để trả về JSX
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto mt-3">
            <div className='text-center'>
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function Footer() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
