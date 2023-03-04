class Api::GreetingController < ApplicationController
  def index
    greetings_count = Greeting.count
    random_offset = rand(greetings_count)
    greetings = Greeting.offset(random_offset).first
    render json: greetings
  end
end
