/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    text-align: center;
    padding: 40px 20px;
}

header h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Main Content */
main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

/* Main Display Area */
#image {
    width: 100%;
    height: 450px;
    background-color: #2c3e50;
    background-image: url('');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    padding: 30px;
    margin-bottom: 40px;
    transition: all 0.3s ease;
}

/* Thumbnails Container */
.thumbnails {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

/* Figure Elements */
figure {
    margin: 0;
    text-align: center;
}

/* Thumbnail Images */
.thumbnails img {
    width: 220px;
    height: 165px;
    object-fit: cover;
    border: 5px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: block;
}

/* Hover and Focus Effects */
.thumbnails img:hover,
.thumbnails img:focus {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    outline: 3px solid #764ba2;
    outline-offset: 3px;
}

/* Focus visible for better accessibility */
.thumbnails img:focus-visible {
    outline: 4px solid #ff6b6b;
    outline-offset: 4px;
}

/* Figcaption */
figcaption {
    margin-top: 10px;
    font-weight: 600;
    color: #555;
    font-size: 0.95rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 25px;
    background: #2c3e50;
    color: #fff;
    margin-top: 50px;
}

/* Responsive Design */
@media (max-width: 768px) {
    #image {
        height: 300px;
        font-size: 1.3rem;
    }
    
    .thumbnails img {
        width: 160px;
        height: 120px;
    }
    
    header h1 {
        font-size: 1.8rem;
    }
}
