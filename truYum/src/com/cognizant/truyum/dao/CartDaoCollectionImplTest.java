package com.cognizant.truyum.dao;

import java.text.ParseException;

public class CartDaoCollectionImplTest {
	public static void main(String[] args) throws ParseException {
		testAddCartItem();
		testRemoveCartItem();
	}

	public static void testAddCartItem() throws ParseException {
		CartDao cartDao = new CartDaoCollectionImpl();
		cartDao.addCartItem(1, 1002);
		cartDao.addCartItem(1, 1003);
		try {
			System.out.println(cartDao.getAllCartItems(1));
		} catch (CartEmptyException e) {
			e.printStackTrace();
		}
	}

	public static void testGetAllCartItem() {

	}

	public static void testRemoveCartItem() {
		CartDao cartDao = new CartDaoCollectionImpl();
		cartDao.removeCartItem(1, 1002);
		try {
			System.out.println(cartDao.getAllCartItems(1));
		} catch (CartEmptyException e) {
			e.printStackTrace();
		}
	}
}
