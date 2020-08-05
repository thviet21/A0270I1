let get_Request = document.getElementById("chonBai");

function doSomething() {
    switch (get_Request.value) {
        case '1':
            checkAB();
            break;
        case '2':
            checkAge();
            break;
        case '3':
            checkNumber();
            break;
        case '4':
            maxABC();
            break;
        case '5':
            checkAcademic_rank();
            break;
        case '6':
            caculate_Commission();
            break;
        case '7':
            cacalate_Telephone();
            break;
        default:
            alert("Nhập vào số từ 1-7 thôi :@ !")

    }
}

function checkAB() {
    let get_A = parseInt(prompt("Nhập vào số A", ''));
    let get_B = parseInt(prompt("Nhập vào số B", ''));
    // console.log(get_A <= 0 || isNaN(get_A) || isNaN( get_B) || get_B <= 0);
    if (get_A <= 0 || isNaN(get_A) || isNaN(get_B) || get_B <= 0) {
        alert("Nhập vào 2 số A B phải lớn hơn 0 bạn ei:");
    } else if (get_A < get_B) {
        alert("Nhập vào A lớn hơn B bạn ơi!");
    } else {
        if (get_A % get_B === 0) {
            alert("A chia hết cho B!!");
        } else alert("A không chia hết cho B bạn ơi!");
    }
}

function checkAge() {
    let get_Age = parseInt(prompt("Nhập vào tuổi!", ""));
    if (get_Age < 15 && get_Age > 0) {
        alert("Bạn chưa đủ điều kiện là học sinh lớp 10");
    } else if (isNaN(get_Age) || get_Age < 0) {
        alert("Nhập vào tuổi lớn hơn 0");
    } else {
        alert("Chúc mừng bạn là học sinh lớp 10!")
    }

}

function checkNumber() {
    let get_Number = parseInt(prompt("Nhập vào 1 số nguyên!", ""));
    if (get_Number < 0) {
        alert("Số " + get_Number + " nhỏ hơn 0");
    } else if (get_Number === 0) {
        alert("Số " + get_Number + " bằng 0");
    } else {
        alert("Số " + get_Number + " lớn hơn 0");
    }
}

function maxABC() {
    let get_A = parseInt(prompt("Nhập vào A:", ""));
    let get_B = parseInt(prompt("Nhập vào B:", ""));
    let get_C = parseInt(prompt("Nhập vào C:", ""));
    let max = get_A;
    if (get_A <= 0 || isNaN(get_A) || isNaN(get_C) || get_C <= 0 || isNaN(get_B) || get_B <= 0) {
        alert("Nhập vào 3 số A, B, C phải lớn hơn 0 bạn ei!");
    } else {
        if ((get_A > get_B) && (get_A > get_C)) {
            max = getA;
        } else if (get_B > get_A && get_B > get_C) {
            max = getB;
        } else {
            max = get_C;
        }
        alert("Số lớn nhất là: " + max);
    }

}

function checkAcademic_rank() {
    let get_A = parseInt(prompt("Nhập vào điểm Bài kiểm tra:", ""));
    let get_B = parseInt(prompt("Nhập vào điểm Bài thi giữa kì:", ""));
    let get_C = parseInt(prompt("Nhập vào điểm Bài thi cuối kì:", ""));
    let avg = (get_A + get_B + get_C) / 3;
    if (get_A < 0 || isNaN(get_A) || isNaN(get_C) || get_C < 0 || isNaN(get_B) || get_B < 0) {
        alert("Nhập vào 3 số A, B, C phải lớn hơn 0 bạn ei!");
    } else {
        if (avg >= 8) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực giỏi!");
        } else if (avg >= 6.5) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực khá!");
        } else if (avg > 4.5) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực trung bình!");
        } else alert("Điểm trung bình: " + avg + " Xếp loại học lực kém!");
    }
}

function caculate_Commission() {
    let get_revenue = parseInt(prompt("Nhập vào doanh thu tháng này để tính hoa hồng"));
    let commission;
    if (get_revenue < 0 || isNaN(get_revenue) || get_revenue === 0) {
        alert("Nhập vào doanh thu tháng lớn hơn 0!");
    } else {
        if (get_revenue > 0) {
            commission = get_revenue * 0.1;
        } else if (get_revenue > 5000000) {
            commission = get_revenue * 0.15;
        } else {
            commission = get_revenue * 0.2;
        }
        alert("Hoa hồng nhận được trong tháng này là: " + commission);
    }
}

function cacalate_Telephone() {
    let get_Minute = parseInt(prompt("Nhập vào số phút gọi tháng này: "));
    let phi = 0;
    let tong;
    const phicodinh = 25;
    if (get_Minute <= 0 || isNaN(get_Minute)) {
        alert("Nhập vào số phút lớn hơn 0, hoặc đồng bỏ trống! ")
    } else {
        if (get_Minute > 200)
            phi = (get_Minute - 200) * 200 + 150 * 400 + 50 * 600;
        else if (get_Minute > 50)
            phi = (get_Minute - 50) * 400 + 50 * 600;
        else
            phi = get_Minute * 600;
        tong = (0.01 * phi + phicodinh )*1000;
    }
    alert("Số phút gọi tháng này " + get_Minute +" và Số tiền điện thoại tháng này là: "+ tong);
}