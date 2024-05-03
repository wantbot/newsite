
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="images/icon.ico">
    <meta property="og:title" content="omni" />
    <meta property="og:description" content="A cheap multipurpose bot." />
    <meta property="og:image" content="https://omniscient.rocks/images/bot_icon.gif" />
    <meta property="og:url" content="https://omniscient.rocks/" />
    <meta property="og:site_name" content="omniscient.rocks" />
    <meta name="theme-color" content="#800000">
    <title>omniscient</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #121212;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        }
        .container {
            padding: 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 90%;
            max-width: 350px;
            margin: 10px auto; /* Centering the container */
        }
        .container:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .discord-widget-container {
            width: 90%;
            max-width: 350px; /* Match the width of .container */
            overflow: hidden; /* Hide the overflow */
        }
        .discord-widget-container iframe {
            width: 100%;
            height: 500px; /* fixed height or use aspect ratio for responsive height */
            border: none;
        }
        .bot-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 10px auto; /* Centering the image */
            display: block;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
        h1 {
            color: #FFFFFFF;
            margin-bottom: 0.5em;
            font-size: 1.75em; /* slightly smaller */
        }
        p {
            color: #FFFFFF;
            font-size: 1em; /* smaller font size */
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 15px;
            background-color: #800080;
            color: white;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        .button:hover {
            background-color: #5a6eae;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        }
        /* Adjustments for very small screens */
        @media (max-width: 600px) {
            .container {
                width: 95%;
                border-radius: 5px; /* smaller radius */
            }
            .discord-widget-container {
                margin-bottom: 20px; /* space below the widget */
            }
            .discord-widget-container iframe {
                height: 400px; /* shorter height on small screens */
            }
            .bot-image {
                width: 60px;
                height: 60px;
            }
            h1 {
                font-size: 1.5em; /* even smaller */
            }
            p {
                font-size: 0.9em; /* even smaller */
            }
            .button {
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <img src="https://i.pinimg.com/originals/d6/20/f4/d620f43fcc7dba0a79712b6d41a8ed2d.gif" alt="Omni" class="bot-image">
    <h1>want</h1>
    <p>"If we wanted something, we just took it. If anyone complained twice they got hit so bad, believe me, they never complained again"</p>
    <a href="https://t.me/riposting" class="button">Telegram</a>
</div>

<div class="container">
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdP1bNwwnf2P3BujBtRj6bPHn0O5lxx_gGEFz5rRcrmNV4Aks6" alt="Omni" class="bot-image">
    <h1>forlorn</h1>
    <p>404</p>
    <a href="https://t.me/optoutdemon" class="button">Telegram</a>
    <a href="https://discord.com/users/1207477290548858890" class="button">Discord</a>
</div>
</body>
</html>