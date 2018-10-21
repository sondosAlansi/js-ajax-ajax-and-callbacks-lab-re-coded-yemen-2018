$(document).ready(function (){
  
 $('a').click(function(){
   var search=$('#searchTerms').val();
     $.get('https://api.github.com/users/'+search+'/repos', function(response) {
      
    let re= `<ul>
    ${response.map(r => 
    
     `<li>
     <a href=${r.html_url}> ${r.name} </span>
    
       <span>${r.owner.login}</span>
       <img src=${r.owner.avatar_url}/>
       <span><a href="">showCommits</a></span>
        
    </li>
    
    `)
    .join('')}</ul>`;
        $('#results').html(re);
        // console.log(response);
    });
  
   
 });
    
    
});
