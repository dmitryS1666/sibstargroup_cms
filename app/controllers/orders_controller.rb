class OrdersController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create]

  def new
    @order = Order.new
  end

  def create
    _order_params = prepared_params(order_params)

    @order = Order.new(_order_params)
    if @order.save
      OrderMailer.order_email(@order).deliver_now
      redirect_to root_path, notice: 'Thank you for your message!'
    else
      render :new
    end
  end

  private

  def prepared_params(order_params)
    hash = Hash.new
    destination_station = order_params[:delivery_direction] == 'China' ? order_params[:destination_station_china] : order_params[:destination_station_turkey]
    hash[:destination_station] = destination_station

    order_params.delete(:destination_station_china)
    order_params.delete(:destination_station_turkey)

    hash[:created_at] = Time.zone.now

    hash.merge(order_params)
  end

  def order_params
    params.permit(
      :coal_name,
      :basis_supply,
      :delivery_direction,
      :destination_station_turkey,
      :destination_station_china,
      :name,
      :count,
      :organization,
      :email,
      :price,
      :phone,
      :message
    )
  end
end
