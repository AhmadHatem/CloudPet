class RegistersController < ApplicationController
	def show
    @register = Register.find(params[:id])
  end
  def index
    @register = current_user.registers
    


    @registers = []
    @buddies = Buddy.where(:user => current_user)
    @buddies.each do |buddy|
    @registers += [buddy.register]

      
      end
       
  end

  def edit
  @register = Register.find(params[:id])
	end
	def update
  @register = Register.find(params[:id])
 	end


	def new
    @register= Register.new
  	end
  def create
  @register = Register.new(register_params)
  @register.User = current_user
 
  if @register.save
  redirect_to @register
else
  render'new'
end
end


def destroy
  @register = Register.find(params[:id])
  @register.destroy
 
  redirect_to registers_path
end






 
private
  def register_params
    params.require(:register).permit(:name, :breed, :gender, :species, :image, :date_of_birth)
  end
end
