# This is my notes

## note my web dev notes were moved to the readme file because I got docked for putting them here instead of there.

### Final notes:
    
            What ports are used for HTTP, HTTPS, SSH?
                port 80, tcp port 443, and port 22
            What do HTTP status codes in the 300, 400, 500 range indicate?
                redirection messages, client error responses, server error responses
            What does the HTTP header content-type allows you to do?
                The Content-Type representation header is used to indicate the original media type of the resource (json http etc)
            What do the following attributes of a cookie do?
                Domain : maps to waht domain the cookie comes from
                Path : path the cookie was generated on
                SameSite : will only return the cookie to the domain it was generated with
                HTTPOnly : tells to not allow js to run on the browser so it can read the cookie first
            Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
                (in the test will be presented with some code with console logs in diff functions, my job is to determine which functions are called and in which order)
            Given the following Express service code: What does the following JavaScript fetch return?
                see last prob. fetch returns info from a call to a server (frontend calling from back end). Express service codes are the codes in the service usually called app (app.use(code here))

            Given the following MongoDB query
            { cost: { $gt: 10 }, name: /fran.*/}
            select all of the matching documents.
                Grab documents (each entry in mogodb is called a document) where cost = 10 and name = fran.* (. means any char and * means any number of that char)
            
            How should you store user passwords in a database?
                hashed and salted
            Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
                onconnected/ ondisconnected / onmessage? I missed this
                ws on connect is when you get an unique user id and you assign a socket number, and such. on message is for when clients sned or receive messages...
            What is the WebSocket protocol used for?
                Key aspect of web socket is instantaeous client to server connection where either can initiate the contact
            What is JSX and how are the curly braces rendered?
                JS and HTML smushed together. Anything after the return is rendered to the screen
            Assuming a HTML document with a 
            <div id="root"></div>
            element, what content will the following React component generate?
                  function Welcome(props) {
                    return <h1>Hello, {props.name}</h1>;
                  }
                  function App() {
                    return (
                      <div>
                        <Welcome name="Sara" />
                        <Welcome name="Cahal" />
                        <Welcome name="Edite" />
                      </div>
                    );
                  }
                  const root = ReactDOM.createRoot(document.getElementById('root'));
                  root.render(<App />);
                ANSWER: Hello sara, Hello Cahal, Hello Edite
            Assuming a HTML document with a 
            <div id="root"></div>
            element, what content will the following React component generate?
                function Numbers() { 
                  const numbers = [1, 2, 3, 4, 5];
                  const listItems = numbers.map((number) =>
                    <li>{number}</li>
                  );
                  return(<ul>{listItems}</ul>)
                }
                const root = ReactDOM.createRoot(document.getElementById('root')); 
                root.render(<Numbers/>);
                ANSWER: lists the numbers 12345 in an unordered list (html unordered list the list will still be in order) (bullet points for each num)
            What does the following React component do?
            function Example() {
              // Declare a new state variable, which we'll call "count"  
              const [count, setCount] = useState(0);
              return (
                <div>
                  <p>You clicked {count} times</p>
                  <button onClick={() => setCount(count + 1)}>
                    Click me
                  </button>
                </div>
              );
            }
                ANSWER: It will return a message indicating how many times the button has been clicked (and will then increase the times clicked after)
            What are React Hooks used for?
                lets you modify states and handles the lifecycle events of a component (on create, on destroy, etc) hooks let you do different things with that
            What is the useEffect hook used for?
                Watches lifecycle events for the component and runs stuff based off those lifecycle events (so like when a component is rerendered) you can use useEffect hooks to update the page or destroy it when things change...
            What does this code do?
            export default function App() {
              return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="blogs" element={<Blogs />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="*" element={<NoPage />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              );
            }
                ANSWER: renders different components on top of each other depending on whats searched for
            What role does npm play in web development?
                manages your node packages and allows you to download third party packages and manages them
            What does package.json do in a npm project?
                Lists all the packages that you have, when you run scripts like deployement scripts it can tell it what packages to use or send or what command to use to run your server, and provides name and meta info about the project
            What does the fetch function do?
                see prev problem. fetching requests data from back end to be brought for use on the fornt end
            What does node.js do?
                runs js on your server
            What does Vite do?
                allows you to bundle all your code together for production so that it can be deployed to a server



## startup notes
Had to signifigantly rework my website taking liberally from the simon example to get things working. Github is broken and wont accept git commits after I added gitignore so I need to fix that. I have manually added some of the files to github to preserve them but may main website directory is full of junk rn. Attaching the api's to the javascript pages was interesting .

## setting up github
I learned in this assignment how to set up git with my VS code environement, how to handle SSH keys, and a little about commits and merges.

## html
I reviewed and learned html structure and completed the code pen

## CSS
I have done the requested code pens and deployed the updated simon folder. I am reviewing the simon example as I put CSS on my main page

## CSS cont.
I have reworked styling for the pages, in general they work fine, though the gameplay page needs work... a lot of work. Luckily the layout is easy enough that everything works even when resized. That will change when the game is implimented in javascript.

## Services
Who boy that was a lot to take in. I just submitted the simon service after realizing I didnt need to edit the code to make it work, the instructions were just to show me how for my startup, so theres that. It seems to work byt my startup is so far from complete its honestly intimidating. I have a lot to do to 1) get the code to work and 2) move all javascripting to the server side


### Midterm notes:
    In the following code, what does the link element do?
      The <link> tag defines the relationship between the current document and an external resource.
      The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
      The <link> element is an empty element, it contains attributes only.
    
    In the following code,  what does a div tag do?
      defines a division or a section in an HTML document
      
    In the following code, what is the difference between the #title and .grid selector?  
      Simple selectors (select elements based on name, id, class) ex: p{}selects all p elements, #para1{}selects only this id,       
        .center selects a class. there are several ways to stack this including <p class "c1, c2"></p>. 
      Combinator selectors (select elements based on a specific relationship between them) ex:
        descendant selector (space)
        child selector (>)
        adjacent sibling selector (+)
        general sibling selector (~)
      Pseudo-class selectors (select elements based on a certain state) ex: done in the style selector:pseudo-class{} though details change
      Pseudo-elements selectors (select and style a part of an element) ex: selector::pseudo-element{}
      Attribute selectors (select elements based on an attribute or attribute value) ex: a[targetAttribute]{}

    In the following code, what is the difference between padding and margin?
      In CSS, a margin is the space around an element's border, while padding is the space between an element's border and the   
      element's content. Put another way, the margin property controls the space outside an element, and the padding property 
      controls the space inside an element.
    Given this HTML and this CSS how will the images be displayed using flex?
        
    What does the following padding CSS do?
        padding creates buffer inside the borders
    What does the following code using arrow syntax function declaration do?
      before arrow syntax: 
      hello = function() {
        return "Hello World!";
      } 
      after:
      hello = () => {
        return "Hello World!";
      } 
      when you only have one statement: hello = () => "Hello World!";  works too
      passing in vals: hello = (val) => "Hello " + val; and withotu parens: hello = val => "Hello " + val; 
    What does the following code using map with an array output?
      map() causes a dunction to be executed on all the elements on an array. This returns a new array with new elements, the orig 
      array is not changed
    What does the following code output using getElementByID and addEventListener?
        idk
    What does the following line of Javascript do using a # selector?
      # selects an id, so that line probs gives a special rule for what specific element is affected
    Which of the following are true? (mark all that are true about the DOM)
        Document Object Model (DOM) is a programming interface for web documents.
        It represents the page so that programs can change the document structure, style, and content
        The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. 
    By default, the HTML span element has a default CSS display property value of: 
        inline (flows within the content of the surrounding text or other inline and block-level elements.)
    How would you use CSS to change all the div elements to have a background color of red?
        div{ background-color: red}
    How would you display an image with a hyperlink in HTML?
        <a href="https://www.example.com">
          <img src="image.jpg" alt="Description of the image">
        </a>
    In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
        content, padding border, margin
    Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
        going to use selectors I reckon so probably p #troub1{color:green}
    What will the following code output when executed using a for loop and console.log?
        idk
    How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
        #byu{color:green}
    What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
        <p>, <ol>, <ul>, <h2>, <h1>, <h3>
    How do you declare the document type to be html?
        <!DOCTYPE html>
    What is valid javascript syntax for if, else, for, while, switch statements?
        if(){}else(){}
        for(let i = 0 ; i < n; i++){}
        while(){}
        switch(expression){case1: (if expression = case 1)break default:break}
    What is the correct syntax for creating a javascript object?
        let beans = {key:value, key2:value2};
    Is is possible to add new properties to javascript objects?
        yes
    If you want to include JavaScript on an HTML page, which tag do you use?
        <script> code goes here</script>
    Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
        string method .replace(x, y)
    Which of the following correctly describes JSON?
        JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
    What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
        change mode (changes permissions), print working directory, change directory, list, vim is a text editor, nano also a text editor, mk dir makes a direcotry, move a file, remove, manual, ssh connects to servers, gives process status, wget a networking command-line tool that lets you download files and interact with REST APIs, super user do, do (for i in `seq 1 2`; do echo "hi"; done) just executes previous code
    Which of the following console command creates a remote shell session?
        ssh -p portnumber userName@hostName
    Which of the following is true when the -la parameter is specified for the ls console command?
        allows for hidden files and details of all listed files to be show, such as permissions
    Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
        "banana," "fruit," are subdomains, .click is a top level domain, and bozo.click is the root
    Is a web certificate is necessary to use HTTPS.
        yes
    Can a DNS A record can point to an IP address or another A record.
        Only by using CNAME to point to another domain and its records which is inefficient
    Port 443, 80, 22 is reserved for which protocol?
        Port 443 is reserved for the HTTPS (Hypertext Transfer Protocol Secure) protocol
        Port 80 is reserved for the HTTP (Hypertext Transfer Protocol) protocol. It's used for regular, unencrypted web communications.
        Port 22 is reserved for the SSH (Secure Shell) protocol.
    What will the following code using Promises output when executed?
