/* xay dung ham sinh id tu dong, output la chuoi duy naht*/
function Taodoithuongitemgiohang(idSanPham,soluong){
	var itemgiohang = new Object();
	// sinh id 
	itemgiohang.idsanpham= idsanpham;
	itemgiohang.soluong= soluong;
	return itemgiohang;
}
/* lấy ra toàn bộ các itemn gio hang tu localName*/
	 function laydanhsachitemgiohang(){
		 