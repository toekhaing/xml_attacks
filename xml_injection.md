## Detection ##

'	 (Single Quote)
"  (Double Quote)


## Exploitation ##

<!-- Existing TAG -->	-	New value of Existing Tag 

for example 

Consier Book Store Code will be :
```
<book>
<id> 102 </id>
<bookName> Sherlock </bookName>
<price> 200 </price>
</book>
```
When user buys books, the URL will be :

http://shop.com/buy.php?id=102&bookName=Sherlock&price=200

When attacker inject existing tag <price> to new value 

http://shop.com/buy.php?id=102&bookName=Sherlock&price=200 

The Code look like ... 
```
<book>
<id> 102 </id>
<bookName> Sherlock </bookName>
<price> 0 </price>
<price> 200 </price>
</book>
```
