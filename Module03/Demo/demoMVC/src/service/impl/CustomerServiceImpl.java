package service.impl;

import model.Customer;
import service.CustomerService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CustomerServiceImpl implements CustomerService {

    public static Map<Integer,Customer> customerMap;

    static {
        customerMap =new HashMap<>();
        customerMap.put(1,new Customer(1,"Dat","datmaster@codegym","Dalat"));
        customerMap.put(2,new Customer(2,"Nam","Nam2000@codegym","Dalat"));
        customerMap.put(3,new Customer(3,"Sang","ChayDoAn@codegym","Dalat"));
    }
    @Override
    public List<Customer> findAll() {
        return new ArrayList<>(customerMap.values()) ;
    }

    @Override
    public void save(Customer customer) {
        customerMap.put(customer.getId(),customer);
    }

    @Override
    public Customer findById(int id) {
        return customerMap.get(id);
    }

    @Override
    public void update(int id, Customer customer) {
        customerMap.put(id,customer);
    }

    @Override
    public void remove(int id) {
        customerMap.remove(id);
    }
}
