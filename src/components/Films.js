import React, { useState } from 'react';
import { FILMS } from '../shared/ListOfFilms';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { pink } from '@mui/material/colors';

export default function Films() {
  const [hoverFilm, setHoverFilm] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [showPopupVideo, setShowPopupVideo] = useState(false);

  const handleOpenModal = (film) => {
    setInfoModalOpen(true);
    setSelectedFilm(film);
  }

  const handleCloseModal = () => {
    setInfoModalOpen(false);
  }

  const handleHoverFilm = (film) => {
    setHoverFilm(film);
  }

  const handleOpenPopup = (film) => {
    setShowPopupVideo(true);
    setSelectedFilm(film);
  }

  const handleClosePopup = (film) => {
    setShowPopupVideo(false);
  }

  return (
    <div className='container' style={{  }}>
      <div className='row'>
        {FILMS.map((film) => (
          <div
            className='col col-sm-4 col-md-4 rounded'
            style={{ marginBottom: '0px', marginTop: '100px' }}
            onMouseEnter={() => handleHoverFilm(film)}
            onMouseLeave={() => handleHoverFilm(null)}
          >
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={film.img}
                  alt={film.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {film.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {film.description.substring(0, 100) + "..."}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {hoverFilm === film && (
              <div className="popup" key={film.id}>
                <img style={{ width: '100%', margin: 0 }} src={film.img} alt={film.title} />
                <div className="play-icon" onClick={() => handleOpenPopup(film)}>
                <PlayCircleIcon className="play-icon" style={{ color: 'white', marginTop: '10px', fontSize: '50px' }} />
                </div>
                <h3 className='text-white'>{film.year}</h3>
                <p className='text-white'>{film.during}</p>
                <div onClick={() => handleOpenModal(film)}>
                  <ArrowDropDownCircleIcon className='drop-down' style={{ color: 'white', right: '0px', fontSize: '50px' }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Dialog style={{ backgroundColor: pink[500] }} className="rounded-lg" open={infoModalOpen} onClose={handleCloseModal}>
        <DialogTitle style={{ fontWeight: 'bold' }} className="text-black"><i style={{ fontWeight: '10px' }}>{selectedFilm && selectedFilm.title}</i></DialogTitle>
        <img src={selectedFilm && selectedFilm.img} alt="" />
        <DialogContent className="bg-zinc-900 text-black">
          <p>{selectedFilm && selectedFilm.description}</p>
          <p><i style={{ fontWeight: 'bold' }}>Year:</i> {selectedFilm && selectedFilm.year}</p>
          <p><i style={{ fontWeight: 'bold' }}>Duration:</i> {selectedFilm && selectedFilm.during}</p>
        </DialogContent>
        <DialogActions className="bg-zinc-900 text-white">
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog style={{ backgroundColor: pink[500] }} className="rounded-lg" open={showPopupVideo} onClose={handleClosePopup}>
        <DialogTitle style={{ fontWeight: 'bold' }} className="text-black"><i style={{ fontWeight: '10px' }}>{selectedFilm && selectedFilm.title}</i></DialogTitle>
        {/* <iframe src={selectedFilm && selectedFilm.clip} allowfullscreen ></iframe> */}
        <iframe width="560" height="315" src={selectedFilm && selectedFilm.clip} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <DialogActions className="bg-zinc-900 text-white">
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
