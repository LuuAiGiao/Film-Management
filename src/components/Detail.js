import React, { useState } from 'react';
import { FILMS } from '../shared/ListOfFilms';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { pink } from '@mui/material/colors';
import { FILMS2 } from '../shared/ListOfFilms2';

export default function Series() {
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
        <div className='' style={{}}>
            <div style={{ marginTop: '70px' }}>
                <h2 className='mt-5' style={{ color: 'white', marginBottom: 0 }}>Costume dramas</h2>
            </div>
            <div className='row'>
                {FILMS.map((film) => (
                    <div
                        className='col col-sm-2 col-md-2 rounded'
                        style={{ marginBottom: '50px', marginTop: '10px', paddingLeft: '0px' }}
                        onMouseEnter={() => handleHoverFilm(film)}
                        onMouseLeave={() => handleHoverFilm(null)}
                    >
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={film.img}
                                    alt={film.title}
                                />
                            </CardActionArea>
                        </Card>
                        {hoverFilm === film && (
                            <div style={{ width: '270px', height: '160px' }} className="popup" key={film.id}>
                                <img style={{ width: '100%', padding: 0 }} src={film.img} alt={film.title} />
                                <h3 className='text-white'>{film.name}</h3>
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
            <div style={{ marginTop: '70px' }}>
                <h2 className='mt-5' style={{ color: 'white', marginBottom: 0 }}>America Films</h2>
            </div>
            <div className='row'>
                {FILMS2.map((film) => (
                    <div
                        className='col col-sm-2 col-md-2 rounded'
                        style={{ marginBottom: '50px', marginTop: '10px', paddingLeft: '0px' }}
                        onMouseEnter={() => handleHoverFilm(film)}
                        onMouseLeave={() => handleHoverFilm(null)}
                    >
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={film.img}
                                    alt={film.title}
                                />
                            </CardActionArea>
                        </Card>
                        {hoverFilm === film && (
                            <div style={{ width: '270px', height: '160px' }} className="popup" key={film.id}>
                                <img style={{ width: '100%', padding: 0 }} src={film.img} alt={film.title} />
                                <h3 className='text-white'>{film.name}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
