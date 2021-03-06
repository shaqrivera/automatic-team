const renderHtml = (cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class="bg-danger text-light text-center py-5">
            <h1>My Team</h1>
        </header>
        <main class="d-flex flex-wrap mx-5 my-5 justify-content-around">
            ${cards}
        </main>
    </body>
    </html>`
}
module.exports = renderHtml