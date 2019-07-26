package com.cognizant.truyum.dao;

import java.text.ParseException;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.util.DateUtil;

public class MenuItemDaoCollectionImplTest {
	public static void main(String[] args) throws ParseException {
		testGetMenuItemListAdmin();
		// testGetMenuItemListCutomer();
		testModifyMenuItem();
	}

	public static void testGetMenuItemListAdmin() throws ParseException {
		System.out.println("Inside GetMenuItemListAdmin");
		MenuItemDao menuItemDao = new MenuItemDaoCollectionImpl();
		for (MenuItem menuItem : menuItemDao.getMenuItemListAdmin())
			System.out.println(menuItem);
	}

	public static void testGetMenuItemListCutomer() throws ParseException {
		System.out.println("Inside GetMenuItemListCustomer");
		MenuItemDao menuItemDao = new MenuItemDaoCollectionImpl();
		for (MenuItem menuItem : menuItemDao.getMenuItemListCustomer())
			System.out.println(menuItem);
	}

	public static void testModifyMenuItem() throws ParseException {
		System.out.println("Inside ModifyMenuItem");
		MenuItemDao menuItemDao = new MenuItemDaoCollectionImpl();
		MenuItem menuItem = new MenuItem(1001, "Sandwhich", 100.00f, true, DateUtil.convetToDate("15/03/2017"),
				"Main Course", true);
		menuItemDao.modifyMenuItem(menuItem);
	}

	public static void testGetMenuItem() {

	}
}
