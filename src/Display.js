import { useTheme } from '@emotion/react';
import { createUseStyles } from 'react-jss';
import React, { useState, useEffect } from "react";

const Display = () => {
    const styles = useStyles(useTheme());
	// const imageList = [
	// 	'IMG_20220804_165320.jpg',
    //     'IMG_20220804_185511.jpg',
    //     'IMG_20220805_113203.jpg',
    //     'IMG_20220805_113743.jpg',
    //     'IMG_20220819_105449.jpg',
    //     'IMG_20220819_122052.jpg',
    //     'IMG_20220821_121649.jpg',
    //     'IMG_20220821_170751.jpg',
    //     'IMG_20221203_161010.jpg',
    //     'IMG_20221226_123215.jpg',
    //     'IMG_20230107_112420.jpg',
    //     'IMG_20230108_112358.jpg',
    //     'IMG_20230127_134921.jpg',
    //     'IMG_20230206_114927.jpg',
    //     'IMG_20230209_115939.jpg'
	// ];

    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);
    // const baseUrl = "./react-photo/";
    const baseUrl = "./";

    useEffect(() => {
      (async () => {
        const url = baseUrl + "images.json";
        console.log(url);
        const response = await fetch(url);
        console.log(response);
        const parsed = await response.json();
        console.log(parsed);
        const imgs = parsed.img.split(',');
        const vids = parsed.videos.split(',');
        console.log(imgs);
        setData(imgs);
        setVideo(vids);
      })();
    }, []);

    return (
        <div>
            <div className={styles.content}>
                {
                    data.map((img, index) => (
                        <div key={index}>
                            <a
                                href={baseUrl + 'img/' + img}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <img className={styles.img} src={baseUrl + 'img/' + img} alt={img} />             
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className={styles.content}>
                {
                    video.map((vid, index) => (
                        <div key={index}>
                            <video width="320" height="240" controls>
                                <source src={baseUrl + 'img/' + vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    content: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 30,
		flexWrap: 'wrap',
		'&>div:not(:last-child)': {
			marginRight: 20,
		},
		'&>div': {
			marginTop: 20,
		},
	},
    img: {
        height: '170px',
        width: '170px',
    }
});

export default Display;