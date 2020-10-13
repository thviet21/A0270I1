package _b4_oop.homework.fan;

public class Fan {
    static final int SLOW = 1;
    static final int MEDIUM = 2;
    static final int FAST = 3;
    private int speed = SLOW;
    private boolean on = false;
    private double radius = 5;
    private String color = "blue";

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
     public void setMaxSpeed(){
        this.speed = FAST;
     }
    public void setMediumSpeed(){
        this.speed = MEDIUM;
    }
    public void setSlowSpeed(){
        this.speed = SLOW;
    }
    public Fan() {
        this.speed = SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }

    public Fan(int speed, boolean on, double radius, String color) {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }

    @Override
    public String toString(){
        String str;
        String color;
        double radius;
        int speed;
        if (this.on = false){
            color = this.color;
            radius = this.radius;
            str = "Fan is off";
            return color+ " " + radius + " " + str;
        }else {
            speed = this.speed;
            color = this.color;
            radius = this.radius;
            str = "Fan is on";
            return speed+ " " + color + " " + radius + " " + str;
        }
    }
}
class Main{
    public static void main(String[] args) {
        Fan fan1 = new Fan(Fan.FAST,true,10,"yellow");
        Fan fan2 = new Fan(Fan.MEDIUM, false, 5,"blue");
        System.out.println(fan1.toString());
        System.out.println(fan2.toString());
    }
}
