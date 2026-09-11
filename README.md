React
Node.js

---------------
Next.js
angular.js

vue.js

express
fs
mongodb
sql

map
foreach
flat()
--------------------------------------


React introduction:
-------------------

Library and Framework:
---------------------

Angular is a Framework:

React is a Library:

next.js Framework:

routing
client side rendaring
server side rendaring

-------------------------------------------------

1. ecommerence   ex: flipkart/amezon/myntra/ebay

data:   

2. fintech:    ex: phopy/google/icici/hdfc/sbi/paytm

data:  

3. hrms :  ex: employee/chilren

data

4. hospital management: 

data

5. insurence

data

--------------------------------------


1. data binding
    
2. Events
    click event
    input event
    form events

3. api intregration
    
    fectch
    axios
    request

    http methods: get, post, put,, patch, delete

    crud opertions:

    create - post
    read - get
    update - put/patch
    delete - delete

4. Routing

5. state management

    data

    local
    global --> context api
                redux toolkit

---------------------------------------------------

what is components:
-------------------

1. functional components -- hooks

useState
useEffect
useRef
useReducer

optimization:

useMemo
useCallback
rect.memo

code spliltting
dynamic redaring



useEffect(()=>{})
useEffect(()=>{},[])

2. class based components


rendaring:
-----------------------------------------------
create react application:

1. Make sure node.js is installed.

node -v
npm -v

2. using create react app(CRA)

(packages and dendencies)

npm - node package manager

ex: npm i react-router-dom

npm i 

npx - node package execute

(global and local):


command to create react application:
--------------------------------------
npx create-react-app <application name>

npx create-react-app my-app

Once application creates use below commands:

cd my-app
npm start


vite:
----
2. second way to create react application

npm create vite@latest <application_name> --templaate react


SPA: single page application
MPA: multi page application


--------------------------------

databinding ---> {}

state:
---------


useState:

---------------------
import : receive
export : send the data

<> - fragments


event: 
inputs --- onChange

button --- onClick
------------------------------------------------------------

Component, Props, State:
------------------------

what a component: 

A component is reusable piece of UI in react.

Instead of writing the entire UI in one file, we divide it into small reusable components.

jsx:  javascript + Html

exmaple:

Header --> one component
Footer --> one component
Navbar  --> one component
product card --> one component
login from --> one component


Props: properties

Props are used to transfer data from parent componet to child component
Read only

{} -> data - binding

-> props are used to pass data
-> data normally flows parant --> child
-> props are read-only
-> child should not directly modify its props



<> --> what is fragments

why we need key prop?

The "key" prop gives each element in a list a unique identity so react can efficiently identify which items have changes, been added, or removed.

what is diffenece beetween state and props?


what is useState?

useState is a React Hook used to store and manage data that can change inside a component.
it will act as local storage to same component
when ever useState gets called page will render automatically, so that updated data will display in to browser.



