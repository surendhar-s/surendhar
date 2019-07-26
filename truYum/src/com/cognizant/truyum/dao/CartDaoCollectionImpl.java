package com.cognizant.truyum.dao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.cognizant.truyum.model.Cart;
import com.cognizant.truyum.model.MenuItem;

public class CartDaoCollectionImpl implements CartDao {
	private static HashMap<Long, Cart> userCarts;

	public CartDaoCollectionImpl() {
		if (userCarts == null)
			userCarts = new HashMap<Long, Cart>();
	}

	@Override
	public void addCartItem(long userId, long menuItemId) throws ParseException {
		MenuItemDao menuItemDao = new MenuItemDaoCollectionImpl();
		MenuItem menuItem = menuItemDao.getMenuItem(menuItemId);
		if (userCarts.containsKey(userId)) {
			userCarts.get(userId).getMenuItemList().add(menuItem);
		} else {
			ArrayList<MenuItem> arrayList = new ArrayList<MenuItem>();
			arrayList.add(menuItem);
			Cart newCart = new Cart();
			newCart.setMenuItemList(arrayList);
			userCarts.put(userId, newCart);
		}
	}

	@Override
	public void removeCartItem(long userId, long menuItemId) {
		Cart cart = userCarts.get(userId);
		for (MenuItem menuItem : cart.getMenuItemList()) {
			if (menuItem.getId() == menuItemId) {
				cart.getMenuItemList().remove(menuItem);
				break;
			}
		}
	}

	@Override
	public Cart getAllCartItems(long userId) throws CartEmptyException {
		Cart cart = userCarts.get(userId);
		if (cart == null || cart.getMenuItemList().isEmpty()) {
			throw new CartEmptyException();
		}
		List<MenuItem> menuItemsList = cart.getMenuItemList();
		double total = 0.0;
		for (MenuItem menuItem : menuItemsList)
			total += menuItem.getPrice();
		cart.setTotal(total);
		return cart;
	}

}
