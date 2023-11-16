class FeedbacksController < ApplicationController
  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = Feedback.new(feedback_params)
    if @feedback.save
      # Отправка письма
      FeedbackMailer.feedback_email(@feedback).deliver_now
      redirect_to root_path, notice: 'Thank you for your message!'
    else
      render :new
    end
  end

  private

  def feedback_params
    params.permit(:name, :email, :message)
  end
end
