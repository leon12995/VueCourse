<h1>[1 Vue Instance]</h1> <br>      
1.1 Stores data,computed, propoties, methods,....<br>
1.2 title: 'Hello!', text: 'Not the title'<br>
1.3 Data and computed propeties may change (e.g. because of user input)<br>
1.4 title: 'Hi there!',text: "Not the title"'<br>
1.5 text:  'Not the title'<br>
<h1>[2 Virtual DOM]</h1><br>
2.1 JS-based DOM which exists ony in memeory<br>
2.2 {el: 'h2', child: 'Hello'},....<br>
2.4 Updates are made to the virtual DOM first, only differences are then rendered to the real >DOM<br>
<h1>[3 Browser DOM]</h1> <br>
3.1 Vue-controlled template is rendered in the DOM<br>
3.2 `<h2>` Hello! `</h2>` `<p>` Not the title `<p>`<br>
3.3 Updates should be reflected, but Vue should not re-render everything<br>
3.4 `<h2>`Hi there! `</h2>` `<p>` Not the title `<p>`


<h1>Vue Instance Lifecycle</h1>
<p>1.createApp({...})</p>
<p>2.beforeCreate()</p>
<p>3.created() -> 3.2 Compile template </p>
<p>4.beforeMount()</p>
<p>5.mounted()</p>
<p>6.Mounted Vue Instance</p>
<p>7.1Data Changed</p>
<p>7.1.1 beforeUpated()</p>
<p>7.1.2 updated </p>
<p>7.2 Instance Unmounted </p>
<p>7.2.1 beforeUnmount() </p>
<p>7.2.2 unmounted()</p>