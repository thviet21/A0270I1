let get_Request = document.getElementById("chonBai");

function doSomething() {
    switch (get_Request.value) {
        case '1':
            change_CtoF();
            break;
        case '2':
            change_MtoFeet();
            break;
        case '3':
            caculate_Area_square();
            break;
        case '4':
            caculate_Area_rectangle();
            break;
        case '5':
            caculate_Area_right_triangle();
            break;
        case '6':
            first_Degree_Equation();
            break;
        case '7':
            quadratic_Equation();
            break;
        case '8':
            checkAge();
            break;
        case '9':
            isTriangle();
            break;
        case '10':
            caculate_Electronic();
            break;
        case '11':
            caculate_personal_income_tax();
            break;
        case '12':
            bank_Interest_rate();
            break;
        default:
            alert("Nhập vào số từ 1-12 thôi :@ !")

    }
}

//Bài 1
function change_CtoF() {
    let get_TemperatureC = parseInt(prompt("Nhập vào số độ C", ''));
    let temperature_F;
    if (get_TemperatureC <= 0 || isNaN(get_TemperatureC)) {
        alert("Nhập vào đô C phải lớn hơn 0 bạn ei:");
    } else {
        temperature_F = (get_TemperatureC * 9 / 5) + 32;
        alert("Độ F sau khi chuyển từ C sang là: " + temperature_F + " độ.");
    }
}

//bài 2

function change_MtoFeet() {
    let get_Meter = parseInt(prompt("Nhập vào số Mét! ", ''));
    let feet;
    if (get_Meter <= 0 || isNaN(get_Meter)) {
        alert("Nhập vào số Mét phải lớn hơn 0 bạn ei:");
    } else {
        feet = get_Meter * 3.2808;
        alert("Độ dài Feet sau khi chuyển từ Meter sang là: " + feet + " feet.");
    }

}

//bài 3
function caculate_Area_square() {
    let get_SideA = parseInt(prompt("Nhập vào cạnh a! ", ''));
    let area;
    if (get_SideA <= 0 || isNaN(get_SideA)) {
        alert("Nhập vào độ dài phải lớn hơn 0 bạn ei:");
    } else {
        area = get_SideA * get_SideA;
        alert("Diện tích hình vuông là: " + area);
    }
}

//bài 4
function caculate_Area_rectangle() {
    let get_SideA = parseInt(prompt("Nhập vào cạnh A:", ""));
    let get_SideB = parseInt(prompt("Nhập vào cạnh B:", ""));

    let area;
    if (get_SideA <= 0 || isNaN(get_SideA) || isNaN(get_SideB) || get_SideB <= 0) {
        alert("Nhập vào 2 số A, B phải lớn hơn 0 bạn ei!");
    } else {
        area = get_SideA * get_SideB;
        alert("Diện tích hình chữ nhật là: " + area);
    }

}

//bài 5
function caculate_Area_right_triangle() {
    let get_SideA = parseInt(prompt("Nhập vào cạnh A:", ""));
    let get_SideB = parseInt(prompt("Nhập vào cạnh B:", ""));

    let area;
    if (get_SideA <= 0 || isNaN(get_SideA) || isNaN(get_SideB) || get_SideB <= 0) {
        alert("Nhập vào 2 số A, B phải lớn hơn 0 bạn ei!");
    } else {
        area = 1 / 2 * (get_SideA * get_SideB);
        alert("Diện tích hình tam giác vuông là: " + area);
    }
}

//bài 6
function first_Degree_Equation() {
    alert("Đây là chương trình giải phương trình bậc nhất dạng: ax + b = 0")
    let get_A = parseInt(prompt("Nhập vào số A:", ""));
    let get_B = parseInt(prompt("Nhập vào số B:", ""));

    let root;
    // if (get_A <= 0 || isNaN(get_A) || isNaN(get_B) || get_B <= 0) {
    //     alert("Nhập vào 2 số A, B phải lớn hơn 0 bạn ei!");
    // } else {
    if (get_A === 0) {
        if (get_B === 0)
            alert("Phuong trinh co vo so nghiem");
        else
            alert("Phuong trinh vo nghiem");
    } else {
        root = (-get_B / get_A);
        alert("Phương trình có nghiệm là: " + root);
    }
    // }
}

//bài 7
function quadratic_Equation() {
    alert("Đây là chương trình giải phương trình bậc nhất dạng: ax2 + bx + c = 0");
    let get_A = parseInt(prompt("Nhập vào số A:", ""));
    let get_B = parseInt(prompt("Nhập vào số B:", ""));
    let get_C = parseInt(prompt("Nhập vào số C:", ""));
    let delta;
    let root1;
    let root2;
    if (get_A === 0) {
        // a== 0 phuong trinh tro thanh phuong trinh bac mot bx + c = 0
        if (get_B === 0) {
            if (get_C === 0) {
                alert("Phương trình có vô số nghiệm");
            } else {
                alert("Phương trình vô cmn nghiệm");
            }
        } else {
            root1 = (-get_C / get_B);
            alert("Phương trình có nghiệm duy nhất: " + root1);
        }
    } else {
        delta = get_B * get_B - 4 * get_C * get_C;
        if (delta > 0) {
            root1 = (-get_B + Math.sqrt(delta)) / (2 * get_A);
            root2 = (-get_B - Math.sqrt(delta)) / (2 * get_A);
            alert("Nghiệm thứ nhất: x1 = " + root1 + "\n" + "Nghiệm thứ 2: x2 = " + root2);
        } else if (delta === 0) {
            root1 = -get_B / 2 * get_A;
            alert("Phương trình có nghiệm kép là: x1 = x2 = " + root1);
        } else {
            alert("Phương trình vô nghiệm")
        }
    }
}

//bài 8
function checkAge() {
    let get_Age = parseInt(prompt("Nhập vào tuổi!", ""));
    if (isNaN(get_Age) || get_Age < 0 || get_Age > 120) {
        alert("Đây không phải là tuổi của con người");
    } else {
        alert("Đây là tuổi của con người và có số tuổi là:" + get_Age);
    }
}

//bài 9
function isTriangle() {
    let get_SideA = parseInt(prompt("Nhập vào cạnh A:", ""));
    let get_SideB = parseInt(prompt("Nhập vào cạnh B:", ""));
    let get_SideC = parseInt(prompt("Nhập vào cạnh C:", ""));
    if (get_SideA < 0 || get_SideB < 0 || get_SideC < 0) {
        alert("Đây không phải 3 cạnh của tam giác!");
    } else if (((get_SideA + get_SideB) > get_SideC)
        || ((get_SideB + get_SideC) > get_SideA)
        || ((get_SideA + get_SideC) > get_SideB)) {
        alert("Đây là 3 cạnh của tam giác!");
    }

}

//bài 10
function caculate_Electronic() {
    let get_OldNumber = parseInt(prompt("Nhập vào số điện cũ:", ""));
    let get_NewNumber = parseInt(prompt("Nhập vào số điện mới:", ""));
    let used = get_NewNumber-get_OldNumber;
    let total;

    if (used <= 100)

        total = used * 1000;

    else {
        if (used <= 150)
            total = 100 * 1000 + (used - 100) * 1200;
        else {
            if (used <= 200)
                total = 100 * 1000 + 50 * 1200 + (used - 150) * 2000;
            else {
                if (used >= 201)
                    total = 100 * 1000 + 50 * 1200 + 50 * 2000 + (used - 200) * 2500;
            }
        }
    }
    alert("Tổng tiền điện tháng này là: "+total);
}
//bài 11
function caculate_personal_income_tax() {
    let tax;
    let get_Salary = parseInt(prompt("Nhập vào thu nhập cá nhân:" , ""));
    if (get_Salary <= 0 || isNaN(get_Salary)){
        alert("Nhập vào lương lớn hơn 0!");
    }else {
        if(get_Salary>15000000)
        {
            tax= get_Salary*0.3;

        }
        else if(get_Salary>=7000000)
        {
            tax = get_Salary*0.2;
        }
        else
        {
            tax = get_Salary*0.1;
        }
        alert("Số tiền phải đóng cho nhà nước là: "+ tax);
    }
}
//bài 12
function bank_Interest_rate() {
    let get_Money = parseInt(prompt("Nhập vào số tiền muốn vay:", ""));
    let get_Month = parseInt(prompt("Nhập vào số tháng muốn vay:", ""));
    // let total;
    if (get_Money <= 0 || isNaN(get_Money) || get_Month <= 0 || isNaN(get_Month)){
        alert("Nhập vào số tiền và số tháng muốn vay lớn hơn 0!");
    }
    else {
        for(let i = 0; i < get_Month; i++)
        {
            get_Money = get_Money + get_Money * 0.3 / 100;
        }
        alert("Số tiền phải trả sau: " + get_Month + " tháng là: " + Math.ceil(get_Money) );
    }

}