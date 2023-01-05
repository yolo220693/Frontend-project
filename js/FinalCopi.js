// //Thêm row mới vào bảng Danh sách hàng hóa
// var trTable1 = 
// `<tr>
//     <td><input class="input maSP" type="text" id="" name=""></td>
//     <td><input class="input tenSP" type="text" id="" name=""></td>
//     <td><input class="input soLuong" type="text" id="" name=""></td>
//     <td><input class="input donGia" type="text" id="" name=""></td>
//     <td><input class="input moTa" type="text" id="" name=""></td>
//     <td>
//         <button class="btn btn-primary addRow" onclick="addRowTable(this);">Thêm</button>
//         <button class="btn btn-danger cancel" onclick="cancelRow(this);">Hủy</button>
//     </td>
// </tr>`;
// var donGia1 = $('.donGia1').html();

// function addProduct() {
//     $('#listProduct').append(trTable1);
// };

// function cancelRow(btn) {
//     $(btn).parent().parent().remove(); //btn -> td -> tr
// };
// var donGia;
// function addRowTable(btn) {
//     var maSP = $('.maSP').val();
//     var tenSP = $('.tenSP').val();
//     var soLuong = $('.soLuong').val();
//     donGia = $('.donGia').val();
//     var moTa = $('.moTa').val();

//     $(btn).parent().parent().remove();

//     trTable2 = '<tr><td class ="maSP1">' + maSP + '</td><td class ="tenSP1">' + tenSP + '</td><td class ="soLuong1">' + soLuong + '</td><td>' + donGia + '</td><td>' + moTa + '</td><td><button class="btn btn-primary addRow" onclick="oder(this);">Đặt Hàng</button><button class="btn btn-danger cancel" onclick="cancelRow(this);">Xóa</button></td></tr>';
    
//     $('#listProduct').append(trTable2);
// };

// function oder(btn) {

//     var maSP1 = $('.maSP1').html();
//     var tenSP1 = $('.tenSP1').html();
//     var soLuong1 = $('.soLuong1').html();

//     $(btn).parent().parent().remove();

//     $('.maSP2, .tenSP2, .soLuong2').prop('disabled', false); //disable -> active
//     $('.maSP2, .tenSP2, .soLuong2').addClass('bg-light');

//     $('.maSP2').val(maSP1);
//     $('.tenSP2').val(tenSP1);
//     $('.soLuong2').val(soLuong1);
// };

// function cancelOder() {
//     $('.maSP2, .tenSP2, .soLuong2').val('');
//     $('.maSP2, .tenSP2, .soLuong2').prop('disabled', true);
//     $('.maSP2, .tenSP2, .soLuong2').removeClass('bg-light');
// }

// let stt = 3;

// function buyOder() {
//     var maSP2 = $('.maSP2').val();
//     var tenSP2 = $('.tenSP2').val();
//     var soLuong2 = $('.soLuong2').val();
    
//     if ($('.maSP2, .tenSP2, .soLuong2').val() !== '') {
//         var tableBuy = '<tr><td>' + stt + '</td><td class ="maSP3">' + maSP2 + '</td><td class ="tenSP3">' + tenSP2 + '</td><td class ="soLuong3">' + soLuong2 + '</td><td class ="thanhTien">' + soLuong2 * donGia + '</td>';
//         $('.listBuy').append(tableBuy);
//         stt++;
//     }
//     $('.maSP2, .tenSP2, .soLuong2').val('');
//     $('.maSP2, .tenSP2, .soLuong2').prop('disabled', true);
//     $('.maSP2, .tenSP2, .soLuong2').removeClass('bg-light');
// }