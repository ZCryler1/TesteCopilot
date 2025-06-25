const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js'); // Install with `npm install highlight.js`

// Function to generate an HTML page with syntax-highlighted code
function generateHighlightedHTML(filePath) {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
        return;
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileExtension = path.extname(filePath).toLowerCase();

    // Determine the language based on the file extension
    let language;
    switch (fileExtension) {
        case '.js':
            language = 'javascript';
            break;
        case '.py':
            language = 'python';
            break;
        case '.java':
            language = 'java';
            break;
        default:
            console.error('Unsupported file type:', fileExtension);
            return;
    }

    // Highlight the code
    const highlightedCode = hljs.highlight(fileContent, { language }).value;

    // Generate the HTML content
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Highlight</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        pre {
            padding: 15px;
            background: #2d2d2d;
            color: #f8f8f2;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Highlighted Code</h1>
    <pre><code class="hljs ${language}">${highlightedCode}</code></pre>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
</body>
</html>
`;

    // Write the HTML to a file
    const outputFilePath = path.join(path.dirname(filePath), 'highlighted.html');
    fs.writeFileSync(outputFilePath, htmlContent, 'utf-8');
    console.log('HTML file generated at:', outputFilePath);
}

// Example usage
const filePath = 'c:/Users/loleb/CursoJS/aula30/example.js'; // Replace with your file path
generateHighlightedHTML(filePath);