class OrdersController < ApplicationController
  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      # Отправка письма
      OrderMailer.order_email(@order).deliver_now
      redirect_to root_path, notice: 'Thank you for your message!'
    else
      render :new
    end
  end

  private

  def order_params
    params.permit(:name, :email, :message)
  end
end
