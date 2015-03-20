class RegistersController < ApplicationController
	def show
    @register = Register.find(params[:id])
  end
  def index
    @register = Register.all
  end

  def edit
  @register = Register.find(params[:id])
	end
	def update
  @aregister = Register.find(params[:id])
 	end


	def new
  	end
  def create
  @register = Register.new(register_params)
 
  @register.save
  redirect_to @register
end
 
private
  def register_params
    params.require(:register).permit(:name, :breed, :gender, :noo3, :image)
  end
end
