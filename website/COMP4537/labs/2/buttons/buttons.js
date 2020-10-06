arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for (let i=0; i<26; i++) {
    let button = document.createElement("button");
    button.textContent = arr[i];
    button.onclick = function() { alert(arr[i]); }
    document.body.append(button);
}