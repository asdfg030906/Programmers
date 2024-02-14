process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number);
    
    let rectangle = '';
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            rectangle += '*';
        }
        rectangle += '\n';
    }    
    process.stdout.write(rectangle);
});
