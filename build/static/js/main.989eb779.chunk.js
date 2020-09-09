(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(20),s=a.n(r),c=a(11),l=a(6),i=a(7),h=a(9),u=a(8),f=a(10),p=a(17),m="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},k=function(){return fetch("".concat(m,"/books"),{headers:d}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(m,"/search"),{method:"POST",headers:Object(p.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},g=(a(27),a(0)),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){a.props.changeShelf(e,t)},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.handleChange(e.props.book,t.target.value)},defaultValue:this.props.shelf},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){a.props.changeShelf(e,t)},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:this.props.book.imageLinks&&"url(".concat(this.props.book.imageLinks.smallThumbnail,")")}}),o.a.createElement(y,{book:this.props.book,shelf:this.props.shelf,id:this.props.book.id,changeShelf:this.handleChange})),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors&&this.props.book.authors.map(function(e){return o.a.createElement("div",{key:e},e)}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:[]},a.getShelf=function(e){var t=a.props.mainBooks.filter(function(t){return t.id===e.id});return t.length>0?t[0].shelf:"none"},a.searchBooks=function(e){E(e).then(function(e){a.setState(function(){return{books:e}})})},a.handleChange=function(e){a.setState(function(){return{query:e}}),a.searchBooks(e)},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{to:"/",className:"close-search",onClick:function(){return e.setState({showSearchPage:!1})}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{onChange:function(t){return e.handleChange(t.target.value)},type:"text",placeholder:"Search by title or author",value:this.state.query}))),o.a.createElement("div",{className:"search-books-results"},Array.isArray(this.state.books)?o.a.createElement("ol",{className:"books-grid"},this.state.books&&this.state.books.map(function(t){return o.a.createElement(j,{book:t,shelf:e.getShelf(t),key:t.id,changeShelf:e.props.update})})):o.a.createElement("h2",null,"No Results")))}}]),t}(n.Component),O=function(e){return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},e.shelf.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},e.books.filter(function(t){return t.shelf===e.shelf.shelf}).map(function(t){return o.a.createElement(j,{book:t,changeShelf:e.update,shelf:t.shelf,key:t.id})}))))},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.updateBookInfo=function(e,t){v(e,t).then(function(){k().then(function(e){a.setState(function(){return{books:e}})})})},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){e.setState(function(){return{books:t}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(g.a,{exact:!0,path:"/search"},o.a.createElement(N,{search:this.searchBooks,update:this.updateBookInfo,mainBooks:this.state.books})),o.a.createElement(g.a,{exact:!0,path:"/"},o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,this.props.shelves.map(function(t){return o.a.createElement(O,{update:e.updateBookInfo,key:t.shelf,shelf:t,books:e.state.books})}))),o.a.createElement(c.b,{to:"/search"},o.a.createElement("div",{className:"open-search"},o.a.createElement("button",{onClick:function(){return e.setState({showSearchPage:!0})}},"Add a book"))))))}}]),t}(o.a.Component);S.defaultProps={shelves:[{title:"Currently Reading",shelf:"currentlyReading"},{title:"Want to Read",shelf:"wantToRead"},{title:"Read",shelf:"read"}]};var C=S;a(37);s.a.render(o.a.createElement(c.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.989eb779.chunk.js.map