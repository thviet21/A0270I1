<%--
  Created by IntelliJ IDEA.
  User: Hoang Viet
  Date: 06/01/2021
  Time: 8:52 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Create Customer</title>
</head>
<body>
    <form action="customers" method="post">
        <table>
            <tr>
                <td>ID</td>
                <td><input type="text" name="id"></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" name="address"></td>
            </tr>
            <tr>
                <td><input type="submit" value="Submit"></td>
                <td><input type="reset" value="Reset"></td>
            </tr>
        </table>
        <a href="customers">Back to list customer!</a>
        <input type="hidden" name="action" value="edit">
    </form>
</body>
</html>
